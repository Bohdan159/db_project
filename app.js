const sqlite3 = require('sqlite3').verbose();
let read = require('read');
let Seq = require('seq');
const readline = require('readline');

// console.log(process.argv);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


let mode = process.argv[2];

let db;
let typeColumn = [];
// let input;

// if (process.argv.length >= 2) {
    
    // console.log(1);
// }


// createDB();
// allTablesOutput();
// closeDB();


// var promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     reject(new Error("время вышло!"));
//   }, 1000);

// });

// promise
//   .then(
//     result => alert("Fulfilled: " + result),
//     error => alert("Rejected: " + error.message) // Rejected: время вышло!
//   );

const question = (name, rl) => () => new Promise(resolve => {
  rl.question(`${name}: `, resolve)
})

let answers = {};

const setAnswer = name => answer => {
  answers.name = answer
}


switch(mode){
    case 'show':{

        // console.log('Table: ');
        // rl.on('SIGCOUNT', () =>{
            // setTimeout(function(){
            //     rl.question('Table: ', (input) =>{
            //         createDB();
            //         db.all(`SELECT * FROM ${input};`, [], (err, rows) => {
            //           if (err) {
            //             throw err;
            //           }
            //           rows.forEach((row) => {
            //             console.log(row);
            //           });
            //         });
            //         closeDB();
            //         rl.close();
            //     });
            // }, 100);
                    
            

        // });
        // createDB();
        // let result = allTablesOutput();
        // closeDB();
        // let promise = () => () => new Promise((resolve, reject) => {
        //     read({ prompt : 'Table: ' }, resolve);
        //     // resolve(result);
        // });

        
    
    

        // result
        // .then(
        //     result => console.log(result)
        // );

        // setTimeout(function(){
            Seq()
                .seq(function () {
                    createDB();
                    allTablesOutput();
                    closeDB();
                    setTimeout(() => {read({ prompt : 'Table: ' }, this.into('table'));}, 100);
                })
                .seq(function () {
                    createDB();                
                    showTable(this.vars.table);
                    closeDB();
                });
        // }, 100);
        break;

        // const askValue    = question('Table', rl);
        // // const askPhone    = question('phone', rl)
        // // const askPassword = question('password', rl)

        // // createDB();
        // allTablesOutput()
        // .then(askValue())
        // // .then(() => {console.log(answer.table)})
        // .then(setAnswer('Table')
            
        // )
        // .then(() => {
        //     console.log(answer.table);
        //     createDB();                
        //     showTable(answer.table);
        //     closeDB();
        //   rl.close()
        // })
        // closeDB();
        
        // .then(() => {
            
        // })
        // .then(setAnswer('Table'))
        // .then(() => {
        //     createDB();                
        //     showTable(answer.table);
        //     closeDB();
        //   rl.close()
        // })

    }
    case 'insert':{
        // const askValue    = question('Table');
        // setTimeout(function(){
        //     askValue()
        //     .then(setAnswer(`$(value)`))
        //     .then(() => {
            
        //       // DO WHAT YOU WANT HERE
            
            
        //     })
        // }, 100);
        // break;


        // setTimeout(function(){
            Seq()
                .seq(function () {
                    createDB();
                    allTablesOutput();
                    closeDB();
                    setTimeout(() => {read({ prompt : 'Table: ' }, this.into('table'));}, 100);
                })
                .seq(function () {
                    createDB();                
                    db.all(`SELECT * FROM ${this.vars.table};`, [], (err, rows) => {
                      if (err) {
                        throw err;
                      }
                      // rows.forEach((row) => {
                      //   console.log(row);
                        for(let type in rows[0]){
                            // read({ prompt : `${type}: ` }, this.into(`${type}`));
                            
                            // typeColumn.push(type);

                            typeColumn[`${type}`] = '';
                            // console.log(type);
                            // setTimeout(function(){

                                
                                // rl.question('Table: ', (input) =>{});
                            // }, 1000);

                        } 

                        // console.log(`${typeColumn}`);
                    setTimeout(() => {

                        typeColumn.forEach((value) => {
                            let strTemp = value+': ';
                            read({prompt: strTemp}, this.into('value'));
                            // read({ prompt : "Input parameters for insert "+ typeColumn + ": "   }, this.into('valueInStr'));
                        });
                    }, 100);
                        
                        // typeColumn.forEach((type) => {


                        // const question = (type) => () => new Promise(resolve => {
                        //     read({ prompt : `${type}: ` }, resolve);
                        // });
                        
                        // const setValue = value => answer => {
                        //     typeColumn[value] = answer
                        // };
                        // typeColumn.forEach((type) => {
                        //     const askValue = question(`${type}`)
                        //     askValue()
                        //     .then(setValue(`${type}`))
                        //     .then(() => {
                        //         console.log("i`m here");
                        //     });
                        // });

                        
                        
                        // }
                        // });
                        // console.log(typeColumn);
                        // insert(typeColumn);
                        // insert(type)
                        //         .then(
                        //             value => alert(`Fulfilled: ${value}`)
                        //             );
                      });
                    // console.log(typeColumn);
                    
                    });
                // .seq(function() {


                    // const question = (name) => () => new Promise(resolve => {
                    //     read({ prompt : `${name}: ` }, resolve);
                    // });

                    // const setAnswer = name => answer => {
                    //     answers[name] = answer;
                    // }


                    // typeColumn.forEach((type) => {
                    //     const askValue = question(`${type}`)
                    // });

                    // askValue()
                    // .then(setAnswer(`$(value)`))
                    // .then(() => {
                    
                    //   // DO WHAT YOU WANT HERE
                    // })


                    // askValue()
                    // .then(setAnswer('name') => {console.log(1);})
                    // .then(() = > {
                    //     console.log("2");
                    //     // value => alert(`Fulfilled: ${value}`)
                    // });
                // });
                    // for(let type in typeColumn){
                    //     setTimeout(function(){
                            
                            
                    //             insert(type);
                                // Seq()
                                // .seq(function () {
                                //     console.log(typeColumn);
                                      
                                //         read({ prompt : `${type}: ` }, this.into(`${type}`));
                                        // console.log(this.vars.type);
                                        // }   
                                    
                                    // typeColumn.forEach((type) => {
                                    //     rl.question('Table: ', (input) =>{});
                                        
                                    // });
                                    // console.log('hi');
                                // })
            //                     .seq(function () { 
            // //                         INSERT INTO attrs_element (name, units_measure) 
            // // VALUES (‘fault tolerance’, ‘m’);       
            //                         db.run(`INSERT INTO ${this.vars.table} () VALUES () ;`);
                                      
            //                     });
                            
                    //     }, 10);
                    // }
                    

                //     closeDB();
                // });


        // }, 100);


        // setTimeout(function(){
        //         rl.question('Table: ', (input) =>{

        //             createDB();                    
        //             db.all(`SELECT * FROM ${input};`, [], (err, rows) => {
        //               if (err) {
        //                 throw err;
        //               }
        //               rows.forEach((row) => {

        //                 console.log(row);
        //               });
                      

        //             });
        //             closeDB();

        //             rl.ques
        //             rl.close();
        //         });
        //     }, 100);

        // Seq()        
        //   .seq(function () {
        //     read({ prompt : 'Table: ' }, this.into('table'));
            
        //   })
        //   .seq(function () {
        //     createDB();
        //     db.get(`PRAGMA table_info${this.vars.table};`, [], (err, rows) => {
        //       if (err) {
        //         throw err;
        //       }
        //       console.log(rows);
        //       // rows.forEach((row) => {
        //       //   console.log(row.name);
        //       // });
        //     });
        //     closeDB();

           
        //   });
        break;
    }
    case 'update':{
        setTimeout(function(){
            Seq()
                .seq(function () {
                    read({ prompt : 'Table: ' }, this.into('table'));
                })
                .seq(function () {
                    read({ prompt : 'id: ' }, this.into('id'));
                })
                .seq(function () {
                    createDB();                
                    db.run(`DELETE FROM ${this.vars.table} WHERE id = ${this.vars.id};`);
                    closeDB();
                });
        }, 50);
        break;
    }
    case 'delete':{
        setTimeout(function(){
            Seq()
                .seq(function () {
                    read({ prompt : 'Table: ' }, this.into('table'));
                })
                .seq(function () {
                    read({ prompt : 'id: ' }, this.into('id'));
                })
                .seq(function () {
                    createDB();                
                    db.run(`DELETE FROM ${this.vars.table} WHERE id = ${this.vars.id};`);
                    closeDB();
                });
        }, 50);
        break;
    }
    case 'help': {
        console.log("node app.js 'command'\n");
        console.log("command:");
        console.log("   show -- shows the specified table");
        console.log("   insert -- writes to the specified table");
        console.log("   update -- update the specified record");
        console.log("   delete -- remove the specified record");
        console.log("   help -- help with the application");
        break;
    }
    default:{
        Seq()
            .seq(function () {
                createDB();
                allTablesOutput();
                closeDB();
            })
        console.log("please write 'node app.js help'\n");
        break;
    }

}

/*
Begin functions
*/

// function insert(type){
    // return new Promise(function(resolve) {
    //     read({ prompt : `${type}: ` }, type);
    //     resolve(type);
    // });

    // Seq()
    //     .seq(function () {
            // console.log(typeColumn);                                  
                // read({ prompt : `${type}: ` }, this.into(`${type}`));
                // console.log(this.vars.type);
                // }                                   
            // typeColumn.forEach((type) => {
            //     rl.question('Table: ', (input) =>{});
                
            // });
            // console.log('hi');
        // })
            //                     .seq(function () { 
        // //                         INSERT INTO attrs_element (name, units_measure) 
        // // VALUES (‘fault tolerance’, ‘m’);       
        //                         db.run(`INSERT INTO ${this.vars.table} () VALUES () ;`);
                                  
        //                     });
        
// }



function createDB(){
    db = new sqlite3.Database('assesment.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        return console.error(err.message);
      }
      // console.log('Connected to the in-memory SQlite database.');
    });
}

function closeDB(){
    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      // console.log('Close the database connection.');
    });
}

function allTablesOutput(){
    // return new Promise(function(resolve) {
        // createDB();
            db.all(`select * from sqlite_master where type = 'table' order by name`, [], (err, tables) => {
            if (err) {
                throw err;
            }
            console.log("Tables:");
            tables.forEach((table) => {
                console.log("   ",table.name);
            });
        });
    //         closeDB();
    //         resolve('OK');
    // });
    
}

function showTable(input){
    db.all(`SELECT * FROM ${input};`, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
        // console.log(JSON.stringify(rows));       // возможно нужно будет выводить не в консоль, а в файл. И не просто записи, а в Json-е
    });
}




// db.serialize(() => {
//   db.each(`SELECT id,
//                   name
//            FROM elements;`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.id + "\t" + row.name);
//   });
// });
 
// close the database connection



// var express = require('express');
// var bodyParser = require('body-parser');

// var takeCron = require('./takeCron');
// var requestSite = require('./requestSite');
// var checkRequestSite = require('./checkRequestSite');
// var getDateTime = require('./getDateTime');
// var getRootDomain = require('./getRootDomain');
// var showDataByCondition = require('./showDataByCondition');

// var app = express();
// var jsonParser = bodyParser.json();

// app.use(express.static(__dirname + '/public'));
// //app.get('/', function(req, res) {
// //    //res.end();
// //});
// app.post('/add', jsonParser, function (req, res) {

//     var wpUrl = req.body.wpUrl;
//     var picUrl = req.body.picUrl;
//     var productName = req.body.productName;
//     var productType = req.body.productType;
//     var addedDateTime = getDateTime.GetDateTime();
//     var rootDomain = getRootDomain.ExtractRootDomain(wpUrl);
//     var checContentOfSite = checkRequestSite.CheckContentOfSite(wpUrl);

//     CheckCron(wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//     res.end();
// });

// app.post('/show', jsonParser, function (req, res) {
//  showDataByCondition.ShowDataByCondition(req.body.condition, function (resultShow) {
//         res.send(resultShow);
//     });
// });

// app.post('/show/setsubcondition', jsonParser, function (req, res) {
//     var setSubCondition = showDataByCondition.ShowDataByCondition(req.body.condition);
//     res.send(setSubCondition);
// });

// app.post('/show/subcondition', jsonParser, function (req, res) {
//     console.log(req.body.condition);
//     var resSubCondition = showDataByCondition.ShowDataBySubCondition(req.body.condition);
//     res.send(resSubCondition);
// });


// app.listen(8080);


// function CheckCron(wpUrl, rootDomain, productName, productType, picUrl, addedDateTime) {
//     //for (var i = 1; i <= 10; i++) {
//     if (takeCron.jobOne.running == undefined || takeCron.jobOne.running == false) {
//         requestSite.GetContentOfSite(1, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlOne(wpUrl);
//         takeCron.jobOne.start();
//         console.log('Check 1');
//     } else if (takeCron.jobOne.running == true && (takeCron.jobTwo.running == undefined || takeCron.jobTwo.running == false)) {
//         requestSite.GetContentOfSite(2, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTwo(wpUrl);
//         takeCron.jobTwo.start();
//         console.log('Check 2');
//     } else if (takeCron.jobTwo.running == true && (takeCron.jobThree.running == undefined || takeCron.jobThree.running == false)) {
//         requestSite.GetContentOfSite(3, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlThree(wpUrl);
//         takeCron.jobThree.start();
//         console.log('Check 3');
//     } else if (takeCron.jobThree.running == true && (takeCron.jobFour.running == undefined || takeCron.jobFour.running == false)) {
//         requestSite.GetContentOfSite(4, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlFour(wpUrl);
//         takeCron.jobFour.start();
//         console.log('Check 4');

//     } else if (takeCron.jobFour.running == true && (takeCron.jobFive.running == undefined || takeCron.jobFive.running == false)) {
//         requestSite.GetContentOfSite(5, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlFive(wpUrl);
//         takeCron.jobFive.start();
//         console.log('Check 5');
//     } else if (takeCron.jobFive.running == true && (takeCron.jobSix.running == undefined || takeCron.jobSix.running == false)) {
//         requestSite.GetContentOfSite(6, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlSix(wpUrl);
//         takeCron.jobSix.start();
//         console.log('Check 6');

//     } else if (takeCron.jobSix.running == true && (takeCron.jobSeven.running == undefined || takeCron.jobSeven.running == false)) {
//         requestSite.GetContentOfSite(7, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlSeven(wpUrl);
//         takeCron.jobSeven.start();
//         console.log('Check 7');

//     } else if (takeCron.jobSeven.running == true && (takeCron.jobEight.running == undefined || takeCron.jobEight.running == false)) {
//         requestSite.GetContentOfSite(8, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlEight(wpUrl);
//         takeCron.jobEight.start();
//         console.log('Check 8');

//     } else if (takeCron.jobEight.running == true && (takeCron.jobNine.running == undefined || takeCron.jobNine.running == false)) {
//         requestSite.GetContentOfSite(9, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlNine(wpUrl);
//         takeCron.jobNine.start();
//         console.log('Check 9');

//     } else if (takeCron.jobNine.running == true && (takeCron.jobTen.running == undefined || takeCron.jobTen.running == false)) {
//         requestSite.GetContentOfSite(10, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 10');
//     } else if (takeCron.jobTen.running == true && (takeCron.jobEleven.running == undefined || takeCron.jobElven.running == false)) {
//         requestSite.GetContentOfSite(11, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 11');
//     } else if (takeCron.jobEleven.running == true && (takeCron.jobTwelve.running == undefined || takeCron.jobTwelve.running == false)) {
//         requestSite.GetContentOfSite(12, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 12');
//     } else if (takeCron.jobTwelve.running == true && (takeCron.jobThirteen.running == undefined || takeCron.jobThirteen.running == false)) {
//         requestSite.GetContentOfSite(13, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 13');
//     } else if (takeCron.jobThirteen.running == true && (takeCron.jobFourteen.running == undefined || takeCron.jobFourteen.running == false)) {
//         requestSite.GetContentOfSite(14, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 14');
//     } else if (takeCron.jobFourteen.running == true && (takeCron.jobFifteen.running == undefined || takeCron.jobFifteen.running == false)) {
//         requestSite.GetContentOfSite(15, wpUrl, rootDomain, productName, productType, picUrl, addedDateTime);
//         takeCron.GetUrlTen(wpUrl);
//         takeCron.jobTen.start();
//         console.log('Check 15');
//     }
// }



