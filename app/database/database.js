import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Quizscore.db";
const database_version = "1.0";
const database_displayname = "Offline Database for Quiz Score";
const database_size = 200000;

export default class Database{
    initDB() {
        let db;
        return new Promise((resolve) => {
          console.log("Plugin integrity check ...");
          SQLite.echoTest()
            .then(() => {
              console.log("Integrity check passed ...");
              console.log("Opening database ...");
              SQLite.openDatabase(
                database_name,
                database_version,
                database_displayname,
                database_size
              )
                .then(DB => {
                  db = DB;
                  console.log("Database OPEN");
                  db.executeSql('SELECT * FROM Quiz').then(() => {
                      console.log("Database is ready ... executing query ...");
                  }).catch((error) =>{
                      console.log("Received error: ", error);
                      console.log("Database not yet ready ... populating data");
                      db.transaction((tx) => {
                          tx.executeSql('CREATE TABLE IF NOT EXISTS Quiz (totalscore)');
                      }).then(() => {
                          console.log("Table created successfully");
                      }).catch(error => {
                          console.log(error);
                      });
                  });
                  resolve(db);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log("echoTest failed - plugin not functional");
            });
          });
      };

      closeDatabase(db) {
        if (db) {
          console.log("Closing DB");
          db.close()
            .then(status => {
              console.log("Database CLOSED");
            })
            .catch(error => {
              this.errorCB(error);
            });
        } else {
          console.log("Database was not OPENED");
        }
      };

      // list of totalscore

      listTotalScore() {
        return new Promise((resolve) => {
          const totalscore = [];
          // connection with database
          this.initDB().then((db) => {
            db.transaction((tx) => {
              tx.executeSql('SELECT totalscore FROM Quiz', []).then(([tx,results]) => {
                console.log("Query completed");
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`Total Score: ${row.totalscore}`)
                  const { totalscore } = row;
                  totalscore.push({
                    totalscore
                  });
                }
                console.log(totalscore);
                resolve(totalscore);
              });
            }).then((result) => {
              this.closeDatabase(db);
            }).catch((err) => {
              console.log(err);
            });
          }).catch((err) => {
            console.log(err);
          });
        });  
      }

      // update score
      updateScore(score) {
  return new Promise((resolve) => {
    this.initDB().then((db) => {
      db.transaction((tx) => {
        tx.executeSql('UPDATE Quiz SET score = ?', []).then(([tx, results]) => {
          resolve(results);
        });
      }).then((result) => {
        this.closeDatabase(db);
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  });  
}

}