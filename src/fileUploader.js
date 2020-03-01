var FormData = require('form-data')
var request = require('request')

module.exports = function(file, signed_request, success) {
  var form = new FormData()
  for (var key in signed_request.fields) {
    form.append(key, signed_request.fields[key])
  }
  form.append('file', request(file))
  form.submit(signed_request.post_url, function(err, res) {
    if (err) throw err
   	success(signed_request.fields.key)
  })
}