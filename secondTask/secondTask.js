const main = document.querySelector('.main');

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];



class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return {
            Type: this.type,
            Brand: this.brand,
        }
    }
    getPrice() {
        return `${item.price.toLocaleString('ru-RU')} ₽`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doorsCount) {
        super(type, price, brand);
        this.doorsCount = doorsCount;
    }
    getDoorsCount() {
        return `Количество дверей ${doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return `Максимальная скорость ${maxSpeed} км/ч`;
    }
}

for (let item of data) {

    const section = document.createElement('div');

    if (item.type === 'cars') {
        let car = new Car(item.brand, item.price, item.doorsCount);
        const info = document.createElement('h2');
        const price = document.createElement('p');
        const image = document.createElement('img');

        info.textContent = getInfo();
        price.textContent = getPrice();
        image.src = item.image;

        section.append(info);
        section.append(price);
        section.append(image);
        main.append(section);
    } else {
        let bike = new Bike(item.brand, item.price, item.maxSpeed);

    }

}
