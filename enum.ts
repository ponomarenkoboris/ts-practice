// enum сущность, которая позволяет лучше структурировать код
enum MemberShip {
    Simple,
    Standart,
    Premiun
}
const memberShip = MemberShip.Standart;
const memberShipRevers = MemberShip[2];

console.log(memberShip);
console.log(memberShipRevers);

enum SocicalMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocicalMedia.VK;
console.log(social);