var express = require('express');
var router = express.Router();

const validator  = require('../middleware/validator')

const validatorConfig = require('../util/validatorConfig');
const responseMessages = require('../util/responseMessages');
const responseUtils = require('../util/responseUtils')

const events = require('../services/events')

router.post('/', validator.validatorReqBody(validatorConfig.eventsReqBodyValidatorCreateConfig), async (req, res, next) => {
    try{
        const payload = req.body;
        const event = await events.create(payload);
        return responseUtils.createResponseWithJson(res, event)
      } catch (err) {
        return responseUtils.interServerErrorResponse(res)
      }
})

router.get('/', async (req, res, next) => {
    try{
      const allEvents = await events.findEvents()
      return responseUtils.okResponse(res, allEvents)
    }
    catch(error){
      console.log(error)
      return responseUtils.interServerErrorResponse(res);
    }
})

router.get('/:id', validator.validatorReqPath(validatorConfig.eventsReqPathValidatorConfig), async (req, res, next) => {
  try{
    const id = req.params.id;
    const foundEvent = await events.findById(id);
    return responseUtils.okResponse(res, foundEvent)
  }
  catch(error){
    console.log(error)
    return responseUtils.interServerErrorResponse(res);
  }
})


router.put('/:id', validator.validatorReqPath(validatorConfig.eventsReqPathValidatorConfig), validator.validatorReqBody(validatorConfig.eventsReqBodyValidatorUpdateConfig), async (req, res, next) => {
    try{
        const id = req.params.id;
        const payload = req.body;
        const updateEvents = await events.updateEventsById(id, payload)
        return responseUtils.okResponse(res, updateEvents)
    }
    catch(error){
        console.log(error)
        return responseUtils.interServerErrorResponse(res);
    }
})

router.delete('/:id', validator.validatorReqPath(validatorConfig.eventsReqPathValidatorConfig),async (req, res, next) => {
    try {
      const id = req.params.id;
      const isFoundEvent = await events.findById(id);
      if (!isFoundEvent) {
        return responseUtils.notFoundResponse(res,responseMessages.common.notFound('Event'));
      }else{
        await events.deleteEventsById(id);
        return responseUtils.deleteResponse(res,responseMessages.common.deletedById('Event'));
      }
    } catch (err) {
      return responseUtils.interServerErrorResponse(res);
    }
  });

module.exports = router;

