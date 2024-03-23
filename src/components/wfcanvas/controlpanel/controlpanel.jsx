import React from "react"
import PhoneButton from "./phonebutton"
import EmailButton from "./emailbutton"
import IfButton from "./ifbutton"
import WebhookButton from "./webhookbutton"
import {NODE_DATA} from "../nodetypes"

const ControlPanel = ({onClick}) => {
    return(
    <div className="control-panel ">
        <PhoneButton onClick={() => onClick(...Object.values(NODE_DATA.phoneNode))} />
        <EmailButton onClick={() => onClick(...Object.values(NODE_DATA.emailNode))} />
        <IfButton onClick={() => onClick(...Object.values(NODE_DATA.IfHasEmailCondition))} />
        <WebhookButton onClick={() => onClick(...Object.values(NODE_DATA.TriggerFormPosted))} />
    </div>
    )
}

export default ControlPanel;