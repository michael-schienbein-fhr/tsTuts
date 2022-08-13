interface UserProps {
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) {
    }

    get(propName: string): (number | string | undefined) {
        return this.data[propName as keyof UserProps];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
    }
}