import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);
    const callback = (message: number) => setLastMessage(message);
    useEffect(() => {
        setLastMessage(-1);
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
