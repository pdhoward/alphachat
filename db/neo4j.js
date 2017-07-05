'use strict';

///////////////////////////////////////////////////////////////////////
////////   connect to our graph store and initialize     //////////////
///////               Message and Dialogues             //////////////
//////////////////////////////////////////////////////////////////////

import neo4j                      from 'neo4j-driver';

// neo4j experiment


module.exports = function () {

    const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'nashv1ll'));
    const session = driver.session();
    const resultPromise = session.writeTransaction(tx => tx.run(
      'CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)',
      {message: 'hello, world'}));

    resultPromise
        .then(result => {
            session.close();
            const singleRecord = result.records[0];
            const greeting = singleRecord.get(0);
            console.log(greeting);
            // on application exit:
            driver.close();
        })
        .catch(err => {
          console.log(err)
        });
}
