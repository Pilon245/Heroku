const addresses = [{id: 1, value: 'Icrhi 12'},{id: 2, value: 'Lenina 11'}]

export const addressesRepository = {
    findAddresses(value: string | null | undefined) {
        if (value){
            let filtredAddresses = addresses.filter(p => p.value.indexOf(value) > -1 )
            return filtredAddresses
        } else {
            return addresses;
        }
    },
    findAddressesById(id: number) {
        let Address = addresses.find(p => p.id === id)
        return Address
    }
}