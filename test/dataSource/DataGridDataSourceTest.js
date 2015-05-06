'use strict';

//ensure DOM environment
require('../testdom')()

var React     = require('react/addons')
var TestUtils = React.addons.TestUtils
var DataGrid  = require('../DataGrid')

var TABLE_CLASS         = 'z-table'
var ROW_CLASS           = 'z-row'
var COLUMN_HEADER_CLASS = 'z-column-header'
var COL_MENU_BTN        = 'z-show-menu'
var REMOTE_DATA			= 'http://5.101.99.47:8090/10'

var testUtils = require('../utils')

var render        = testUtils.render
var findWithClass = testUtils.findWithClass
var tryWithClass  = testUtils.tryWithClass

describe('DataGrid Test Suite - DataSource', function(){

	it('check dataSource supported format : array',function(done) {

		var data = [{ id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'}];
        var columns = [
            { name: 'index', title: '#', width: 50 },
            { name: 'firstName'},
            { name: 'lastName'  },
            { name: 'city' },
            { name: 'email' }
        ];

        // table with column menu
        var table = render(
            DataGrid({
                idProperty: 'id',
                dataSource: data,
                columns   : columns
            })
        )

        var rows = tryWithClass(table,ROW_CLASS);
        rows.length.should.equal(1);

        done()

	})

	it('check dataSource supported format : string',function(done) {

		this.timeout(5000);

        

        var fetchData = function(url) {
            var data = {data : [{ id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'}],count:1};
            var promise = new Promise(function(resolve,reject) {
                resolve(data);
            })
            return promise;
        }

        //console.log(fetchData(REMOTE_DATA));

		var columns = [
            { name: 'index', title: '#', width: 50 },
            { name: 'firstName'},
            { name: 'lastName'  },
            { name: 'city' },
            { name: 'email' }
        ];

        var checkRemoteRows = function() {
			console.log('ok')
			this.done()
		}

		var errorResponse = function() {
			console.log('error')
			this.done()
		}

        // table with column menu
        var table = render(
            DataGrid({
                idProperty: 'id',
                dataSource: REMOTE_DATA,
                columns   : columns,
                style     : {height:200},
                fetch     : fetchData
            })
        );

        function testFn() {
            console.log('in test Fn');
            console.log(table);
        }

        setTimeout(function() {
            console.log(table.getDOMNode().outerHTML);
            done();
        },2000)

        /*var rows = tryWithClass(table,ROW_CLASS);
        rows.length.should.equal(1);*/

		/*setTimeout(function() {
			console.log(tryWithClass(table,ROW_CLASS).length);
		},4000);*/

		//done()
	})

	it('check dataSource supported format : function',function(done) {
		done()
	})

	it('check dataSource supported format : promise',function(done) {
		done()
	})

});

