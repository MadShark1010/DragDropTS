//autobind decorator
export function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
    const origionalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = origionalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
