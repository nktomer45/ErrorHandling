const someAsyncOperation =require('./helper')
const promiseHandlerWithAwait=async(req,res,next)=>{
        try {
            const result = await someAsyncOperation();
            res.send(result);
          } catch (err) {
            console.error(err);
            next (err);
          }
}

// const promiseHandlerWithAsync =async(req,res,next)=>{
//     try{
//     someAsyncOperation()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.error(err);
//       next(err);
//     });
// }
// catch(err){
//     next(err);
// }
// }

module.exports=promiseHandlerWithAwait
// exports.promiseHandlerWithAwait