var emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
]

var numUniqueEmails = function(emails) {
  var virtualEmails = new Set()

  for (let email of emails) {
    let value = email.replace(/\+.*@/, '@')
    virtualEmails.add(value)
  }

  virtualEmails = [...virtualEmails]

  for (let i = 0; i < virtualEmails.length; i ++) {
    let email1 = virtualEmails[i]
    let [email1_1, email1_2] = email1.split('@')
    email1_1 = email1_1.replace(/\./g, '')
    for (let j = virtualEmails.length - 1; j > i; j --) {
      let email2 = virtualEmails[j] 
      let [email2_1, email2_2] = email2.split('@')
      email2_1 = email2_1.replace(/\./g, '')
      if (email1_1 === email2_1 && email1_2 === email2_2) {
        virtualEmails.splice(j, 1)
      }
    }
  }

  return virtualEmails.length
}

var result = numUniqueEmails(emails)
console.log(1, result)
