var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');


const auth = require('../middleware/auth');
const validator  = require('../middleware/validator')

const validatorConfig = require('../util/validatorConfig');
const responseMessages = require('../util/responseMessages');
const responseUtils = require('../util/responseUtils')
var { generateJwtToken } = require('../util/generateJwt');

var users = require('../services/users')
router.post('/sign-up', validator.validatorReqBody(validatorConfig.userSignupReqBodyValidatorConfig), async (req, res, next) => {
  try{
      const payload = req.body
      const { email } = payload;
      const isFoundUser = await users.findUserByEmail(email);
      if(isFoundUser){
        return responseUtils.conflictErrorResponseMessageToJson(res, responseMessages.common.conflictById(`This ${email}`));
      }
      const user = await users.createUser(payload)
      return responseUtils.createResponseWithJson(res, user)
  }catch(err){
      console.log(err)
      return responseUtils.interServerErrorResponse(res);
  }
})

router.post('/sign-in', validator.validatorReqBody(validatorConfig.userSigninReqBodyValidatorConfig), async (req, res, next) => {
  try{
      const { email, password } = req.body;
      const foundUser = await users.findUserByEmail(email);
      if(!foundUser){
          return responseUtils.notFoundResponse(res, responseMessages.common.notFound('User'));
      }
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (isMatch) {
          const token = generateJwtToken(foundUser.email, foundUser.id);
          return responseUtils.okResponse(res, token);
      } else {
          return responseUtils.validationErrorResponse(res);
      }
  }catch(err){
      return responseUtils.interServerErrorResponse(res);
  }
})

router.get('/', auth, async (req, res, next) => {
  try{
      const userMail = req.user.email
      users.findUserByEmail(userMail)
      .then((data)=> {
          return responseUtils.okResponse(res, data);
      })
      .catch(() =>  {
          return responseUtils.notFoundResponse(res, responseMessages.common.notFound('User'));
      })
  } catch(err){
      return responseUtils.interServerErrorResponse(res);
  }
})

router.patch('/', auth, async (req, res, next) => {
  try {
    const userEmail = req.user.email;
    const payload = req.body;
    console.log(payload)
    const isFoundUser = await users.findUserByEmail(userEmail)
    if (!isFoundUser) {
      return responseUtils.notFoundResponse(res,responseMessages.common.notFound('Booking Event'));
    }else{
      const updateUser = await users.bookingEvent(userEmail, payload)
      console.log(updateUser)
      return responseUtils.updateResponse(res,responseMessages.common.updatedById('Booking Event'));
    }
  } catch (err) {
    return responseUtils.interServerErrorResponse(res);
  }
});


module.exports = router;
