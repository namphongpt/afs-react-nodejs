const editly = require('editly-faster');


module.exports = async (params) => {
   return await editly(params)
                .catch((error) => {
                    console.log(error)
                });
}