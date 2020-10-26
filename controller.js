exports.getAllData = (req, res) => {

    EmployeeService.createEmployee(req.body)
         .then((data)=>{
           res.json(data)       
         })
         .catch((err)=>{
           console.log(err);
         })
    
    
    };
    