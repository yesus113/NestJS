import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2026-02-25.clover',
    });
  }

  //* Crear metodo de Pago
  public async createPaymentMethod() {
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card: { token: 'tok_visa' },
    });
    return (
      console.log(`Metodo de pago creado: ${paymentMethod.id}`),
      paymentMethod,
      this.createPaymentIntent(paymentMethod.id)
    );
  }

  //* Crear un Pago

  public async createPaymentIntent(paymentMethodId: string) {
    const payment = await this.stripe.paymentIntents.create({
      amount: 5 * 100,
      currency: 'usd',
      payment_method_types: ['card'],
      payment_method: paymentMethodId,
      confirm: true,
    });

    return (console.log(`Pago realizado: ${payment.amount}`), payment);
  }

  //* Crear usuarios
  public async createUser(name: string, email: string) {
    const client = await this.stripe.customers.create({
      name: name,
      email: email,
    });

    console.log(`Client ${name} creado correctamente con ID ${client.id}`);
    return client.id;
  }

  //* Asociar metodo de Pago a usuario
  /*
  public async addPaymentMethodToUser(
    clientId: string,
    paymentMethodId: string,
  ) {
    await this.stripe.paymentMethods.attach(paymentMethodId, clientId);
  }
    */
}
