const domain = require('../domain/Subscription')

class SubscriptionsRepository {
    constructor(client) {
        this.client = client
    }

    async addOrReplaceSubscription(subscription) {
        let len = await this.client.hlen(subscriptionKey)
        
        if(len > 0) {
            // Si existe una Subscripcion, la reemplazamos.
            // Primero borramos la antigua por seguridad.
            await this.removeSubscription()
        }

        const data = this.transformToRepositoryFormat(subscription)
        await this.client.hmset(subscriptionKey, data)
    }

    async getSubscription() {
        let len = await this.client.hlen(subscriptionKey)
        
        if(len <= 0) {
            // Si no existe una Subscripcion entonces devolvemos
            // error de que no esta
            
            return {} // TODO: Perhaps this should result in a 404?
        }

        const data = await this.client.hgetall(subscriptionKey)
        return this.transformToDomainFormat(data)// TODO: Implementation       
    }

    async removeSubscription() {
        let len = await this.client.hlen(subscriptionKey)
        
        if(len <= 0) {
            // Si no existe una Subscripcion entonces devolvemos
            // error de que no esta
            return
        }

        let fields = await this.client.hkeys(subscriptionKey)
        return await this.client.hdel(subscriptionKey, fields)
    }
        // TODO: Implementation       
    }

    // This method will transform a domain representation to its
    // corresponding repository representation.
    transformToRepositoryFormat(subscription) {

        return {
            "product": subscription.product,
            "monthsPurchased": subscription.monthsPurchased,
            "status": subscription.status,
            "datePurchased": subscription.datePurchased
        }
    }

--    // This method will transform a repository representation to its
    // corresponding domain representation.
    transformToDomainFormat(data) {

        const {product, monthsPurchased, datePurchased, status} = data

        return new domain.Subscription(product, monthsPurchased, datePurchased, status)
    }
}

module.exports = (client) => new SubscriptionsRepository(client)
