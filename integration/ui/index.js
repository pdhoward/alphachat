'use strict';

////////////////////////////////////////////////////////////////
/////                 AlphaChat                       ///////
////    Linking business with conversational markets   ///////
////                 c2016 xio                        ///////
////////////////////////////////////////////////////////////

import { TWILIOSMS, TWILIO,
          FACEBOOK, SLACK,
          WEBUI, TWITTER,
          SIRI, ALEXA,
          LINE, WECHAT
        }                  from '../../constants/channels.js'

import { getformatTwilioSMS } from './formattwiliosms';
import { getformatTwilio }    from './formattwilio';
import { getformatFacebook }  from './formatfacebook';
import { getformatSlack }     from './formatslack';
import { getformatWebUI }     from './formatwebui';
import { getformatTwitter }   from './formattwitter';
import { getformatSiri }      from './formatsiri';
import { getformatAlexa }     from './formatalexa';
import { getformatLine }      from './formatline';
import { getformatWeChat }    from './formatwechat';


const actions = [
  { channel: TWILIOSMS, handler: getformatTwilioSMS },
  { channel: TWILIO,    handler: getformatTwilio },
  { channel: FACEBOOK,  handler: getformatFacebook },
  { channel: SLACK,     handler: getformatSlack },
  { channel: WEBUI,     handler: getformatWebUI },
  { channel: TWITTER,   handler: getformatTwitter },
  { channel: SIRI,      handler: getformatSiri },
  { channel: ALEXA,     handler: getformatAlexa },
  { channel: LINE,      handler: getformatLine },
  { channel: WECHAT,    handler: getformatWeChat },
]

module.exports = formatUI;

// note entire req object is passed in as part of initialization to facilitate
// access to complex UI formats. But workreq is paired to essential embedded objects
// in following stages

function formatUI(workreq, cb) {
    switch (workreq.alpha.channel) {
      case TWILIOSMS:
        getformatTwilioSMS(workreq, function(data) {
          console.log('finished it')
          cb(null, data)
        })
        break;
        case TWILIO:
          getformatTwilio.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case FACEBOOK:
          getformatFacebook.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case SLACK:
          getformatSlack.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case WEBUI:
          getformatWebUI.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case TWITTER:
          getformatTwitter.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case SIRI:
          getformatSiri.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case ALEXA:
          getformatAlexa.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case LINE:
          getformatLine.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
        case WECHAT:
          getformatWeChat.get(workreq, function() {
            console.log('finished it')
            cb(data)
          })
        break;
      default:
        console.log("UI Format not supported");
    }
  };
