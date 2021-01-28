class Person {
    private _name: string;
    private _personId: bigint;
    private _customerId: bigint;
    private _firstName: string;
    private _lastName: string;
    private _birthDate: Date;
    private _city: string;
    private _zipCode: string;
    private _street: string;
    private _houseNumber: string;
    private _email: string;
    private _createdDate: Date;
    private _lastModified: Date;

    constructor(name: string, personId: bigint, customerId: bigint, firstName: string, lastName: string, birthDate: Date, city: string, zipCode: string, street: string, houseNumber: string, email: string, createdDate: Date, lastModified: Date) {
        this._name = name;
        this._personId = personId;
        this._customerId = customerId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
        this._city = city;
        this._zipCode = zipCode;
        this._street = street;
        this._houseNumber = houseNumber;
        this._email = email;
        this._createdDate = createdDate;
        this._lastModified = lastModified;
    }


    get name(): string {
        return this._name;
    }

    get personId(): bigint {
        return this._personId;
    }

    get customerId(): bigint {
        return this._customerId;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    get city(): string {
        return this._city;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    get street(): string {
        return this._street;
    }

    get houseNumber(): string {
        return this._houseNumber;
    }

    get email(): string {
        return this._email;
    }

    get createdDate(): Date {
        return this._createdDate;
    }

    get lastModified(): Date {
        return this._lastModified;
    }
}

export default Person;