var ADformat = require('../services').ADformat;

exports.adformatList = (req, res, next) => {
    var query = {};
    query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.page = req.body.page;
	query.pagesize = req.body.pagesize || 10;
    query.apiVersion = req.body.apiVersion;

    ADformat.getAdformats (query, (ret) => {
        if(ret){
            res.json({
                status: "true",
                data: ret
                
                })
        }
        else
		{
			res.json({status: "false",
			data: ret.errors,
			message: 'AD data not found!'})
		}

    });
};