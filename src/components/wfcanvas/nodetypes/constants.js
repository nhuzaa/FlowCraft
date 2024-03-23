
import EmailNode from './emailnode';
import PhoneNode from './phonenode';
import CalendarNode from './calendar';
import ScheduleNode from './schedule';
import IfNode from './ifnode';
import WebHookNode from './webhooknode';


const NODE_TYPES = {
  emailNode: EmailNode,
  phoneNode: PhoneNode,
  calendarNode: CalendarNode,
  scheduleNode: ScheduleNode,
  IfHasPhoneCondition: IfNode,
  IfHasEmailCondition: IfNode,
  IfNode: IfNode,
  SendEmail: EmailNode,
  SendSms: PhoneNode,
  TriggerFormPosted: WebHookNode,
  webHookNode: WebHookNode,
};


// const NODE_DATA = Object.values(NODE_TYPES).map((NodeType, index) => ({
//     type: NodeType,
//     label: `${NodeType.name} Node`,
//     position: { x: index * 100, y: index * 100 },
//   }));

const NODE_DATA = {
  emailNode: {
    type: 'emailNode',
    label: 'Email Node',
    position: { x: 100, y: 100 },
  },
  phoneNode: {
    type: 'phoneNode',
    label: 'Phone sNode',
    position: { x: 0, y: 0 },
  },
  ifNode: {
    type: 'IfNode',
    label: 'IF',
    position: { x: 0, y: 0 },
  },
  IfHasEmailCondition: {
    type: 'IfHasEmailCondition',
    label: 'IF',
    position: { x: 0, y: 0 },
  },
  IfHasPhoneCondition: {
    type: 'IfHasPhoneCondition',
    label: 'IF',
    position: { x: 0, y: 0 },
  },
  TriggerFormPosted: {
    type: 'TriggerFormPosted',
    label: 'TriggerFormPosted',
    position: { x: 0, y: 0 },
  },
  webHookNode: {
    type: 'webHookNode',
    label: 'WebHook',
    position: { x: 0, y: 0 },
  },
}


export { NODE_TYPES, NODE_DATA }