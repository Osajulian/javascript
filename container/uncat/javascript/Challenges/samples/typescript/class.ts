
interface Employee {
    name?: string;
    department?: string;
    giveRaise?: (amount: string) => void;
}


class NewDeveloper implements Employee {
    name: string;
    title: string
}

let googleEng = new NewDeveloper()

console.log(googleEng.title='Noogler')

