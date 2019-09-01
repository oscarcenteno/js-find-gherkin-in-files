var findInFiles = require('find-in-files');

findInFiles.find("test 1", 'a_folder', '.js$')
    .then(function(results) {
        for (var result in results) {
            var res = results[result];
            console.log(
                'found "' + res.matches[0] + '" ' + res.count
                + ' times in "' + result + '"'
            );
      }

      console.log('done');

    });

      console.log('exec finished');
