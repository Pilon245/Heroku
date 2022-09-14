import {Request, Response, Router} from "express";
import {addressesRepository} from "../repositories/addresses-repository";

export const addressesRouter = Router({})


addressesRouter.get('/',(req: Request,res: Response) => {
    const foundAdresses = addressesRepository.findAddresses(req.query.value?.toString())
    res.send(foundAdresses)
})
addressesRouter.get('/:id',(req: Request,res: Response) => {
    const address = addressesRepository.findAddressesById(+req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})
