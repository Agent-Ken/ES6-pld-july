class MyClass {
    #privateField1;
    #privateField2;
    static instanceCount = 0;

    constructor(privateField1, privateField2) {
        this.#privateField1 = privateField1;
        this.#privateField2 = privateField2;
        MyClass.instanceCount++;
    }

    getPrivateFields() {
        return { privateField1: this.#privateField1, privateField2: this.#privateField2 };
    }

    setPrivateField1(value) {
        if (typeof value === 'string') {
            this.#privateField1 = value;
        } else {
            throw new Error('Invalid value for privateField1');
        }
    }

    setPrivateField2(value) {
        if (typeof value === 'number') {
            this.#privateField2 = value;
        } else {
            throw new Error('Invalid value for privateField2');
        }
    }

    static staticMethod1() {
        return 'This is static method 1';
    }

    static staticMethod2() {
        return 'This is static method 2';
    }

    static getInstanceCount() {
        return MyClass.instanceCount;
    }
}

const myClassInstance1 = new MyClass('field1', 10);
const myClassInstance2 = new MyClass('field2', 20);

console.log(MyClass.staticMethod1());
console.log(MyClass.staticMethod2());
console.log(MyClass.getInstanceCount());

console.log(myClassInstance1.getPrivateFields());
myClassInstance1.setPrivateField1('newField1');
myClassInstance1.setPrivateField2(30);
console.log(myClassInstance1.getPrivateFields());
