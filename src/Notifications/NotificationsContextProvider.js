import React, { createContext, useReducer } from "react";
import NotificationItem from "./DisplayNotification";


//make context for adding notifications from anywhere and upadte
export const NotificationContext = createContext();

export default function NotificationContextProvider(props) {
    const [state, dispatch] = useReducer((state, action) => {

        //add and remove the notification item from the dom
        switch (action.motive) {

            // to add, we append new notification to initial state
            case "ADD":
                return [...state, { ...action.payload }];

            //to delete it from dom, we filter the original state notifications and remove the 
            //ones with id we supply in the payload (action)
            case "DELETE":
                return state.filter(el => el.id !== action.id);

            //provide initial state as default
            default:
                return state;
        }
    }, []);

    return (
        // pass dispatch function as a common context
        <NotificationContext.Provider value={dispatch}>
            {/* wrapper conponent */}
            <div className={"notification-wrapper"}>
                {state.map((item) => {
                    return (

                        // provide the notificationitem component with the dispatch method and the entire
                        // notificationitem as props to use in the item component
                        <NotificationItem key={item.id} {...item} dispatch={dispatch} />
                    )
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>

    )
};
