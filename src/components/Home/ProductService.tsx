export const ProductService = {
    getProductsData(){
        return [
            {
                id: 0,
                title: "Certik",
                category: "Service Provider",
                description: "CertiK is Web3's leading smart contract auditor and provides a comprehensive suite of tools to secure the industry at scale.",
                image: "../images/exampleImages/certik.png",
                address: "New York, USA",
                price: 3000,
                rating: {
                    rate: 3.5,
                    count: 30
                }
            },
            {
                id: 1,
                title: "Cyfrin",
                category: "Service Provider",
                description: "We deliver world-class smart contract audits, developer tools, and blockchain developer courses to hundreds of thousands of users, partners, and protocols.",
                image: "../images/exampleImages/Cyfrin.png",
                address: "Boston, USA",
                price: 5440,
                rating: {
                    rate: 3.6,
                    count: 46
                }
            },
            {
                id: 2,
                title: "Hacken",
                category: "Service Provider",
                description: "Mitigate weaknesses in your smart contract and improve its functionality with a double line-to-line code analysis and a separate review by a lead auditor.",
                image: "../images/exampleImages/hacken.png",
                address: "Tallinn, Estonia",
                price: 2500,
                rating: {
                    rate: 4.3,
                    count: 38
                }
            },
            {
                id: 3,
                title: "Haechi",
                category: "Service Provider",
                description: "HAECHI LABS provides blockchain auditing services and digital wallets for most blockchain companies.",
                image: "../images/exampleImages/haechi.png",
                address: "Seoul, South Korea",
                price: 4500,
                rating: {
                    rate: 4.1,
                    count: 44
                }
            },
            {
                id: 4,
                title: "Hashlock",
                category: "Service Provider",
                description: "Hashlock is an industry leading Blockchain Cybersecurity and Smart Contract Auditing Firm, specialising in manual analysis of common smart contract languages, as well as penetration testing and other cybersecurity services.",
                image: "../images/exampleImages/hashlock.png",
                address: "Sydney, Australia",
                price: 3550,
                rating: {
                    rate: 4.5,
                    count: 55
                }
            },
            {
                id: 5,
                title: "Movebit",
                category: "Service Provider",
                description: "MoveBit is a security company that specializes in blockchain, smart contract, and audit services for the Move ecosystem. MoveBit is a subsidiary of BitsLab.",
                image: "../images/exampleImages/movebit.png",
                address: "San Francisco, USA",
                price: 6500,
                rating: {
                    rate: 3.9,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Quill",
                category: "Service Provider",
                description: "QuillHash Technologies offers private and public blockchain development, blockchain audits, smart contract development, and dex development.",
                image: "../images/exampleImages/Quill.png",
                address: "Gurgaon, India",
                price: 6000,
                rating: {
                    rate: 4.2,
                    count: 33
                }
            }
        ]
    },

    // getProductsSmall() {
    //     return Promise.resolve(this.getProductsData().slice(0, 10));
    // },
}