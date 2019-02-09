const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, resp, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            resp.status(500).json({errors: [error]})
        } else{
            resp.json({value})
        }
    })
})

module.exports = BillingCycle
