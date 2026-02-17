const stdDao = require('../dao/stdDao');

const saveStd = async(dataObj)=>{
  return await stdDao.saveStd(dataObj);
}

const getStd = async()=>{
  return await stdDao.getStd();
}

const updateStd = async(id,data)=>{
  return await stdDao.updateStd(id,data);
}

const deleteStd = async(id)=>{
  return await stdDao.deleteStd(id);
}

module.exports = {
  saveStd,
  getStd,
  updateStd,
  deleteStd
}
