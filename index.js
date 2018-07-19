const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const xmlText = fs.readFileSync('./greenhouse.xml', 'utf8');

//const validator = require('xsd-schema-validator');
//const xsdText = fs.readFileSync('./greenhouse.xsd', 'utf8');
//var xsd = require('libxml-xsd');



parser.parseString(xmlText, (err, parsed) => {
  if (err) {
    console.log('Can`t parse XML');
    return console.error(err);
  };
  console.log('XML is valid \n');
  console.dir(parsed, { colors: true, depth: 10 });

  const json = JSON.stringify(parsed);
  console.log('\n\nJSON:', json);
});

















//xsd.parseFile(xsdText, function(err, schema){
//  schema.validate(xmlText, function(err, validationErrors){
//    if (err) {
//      console.log('XML is not valid! You have a proplem');
//      return console.error(err);
//    };
//    
//    parser.parseString(xmlText, (err, parsed) => {
//      if (err) {
//        console.log('Can`t parse XML');
//        return console.error(err);
//      };
//      console.log('XML is valid \n');
//      console.dir(parsed, { colors: true, depth: 30 });
//
//      const json = JSON.stringify(parsed);
//      console.log('\njson object:', json);
//    // err contains any technical error
//    // validationError is an array, null if the validation is ok
//    });  
//  });
//});

//validator.validateXML(xmlText, './greenhouse.xsd', (err, result) => {
//  if (err) {
//    console.log('XML is not valid! You have a proplem');
//    return console.error(err);
//  };
//
//  if (result.valid) {
//    parser.parseString(xmlText, (err, parsed) => {
//      if (err) {
//        console.log('Can`t parse XML');
//        return console.error(err);
//      };
//      console.log('XML is valid \n');
//      console.dir(parsed, { colors: true, depth: 30 });
//
//      const json = JSON.stringify(parsed);
//      console.log('\njson object:', json);
//    });
//  }
//});