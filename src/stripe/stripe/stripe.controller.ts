import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}
  @Get()
  paymentMethod() {
    return this.stripeService.createPaymentMethod();
  }
}
