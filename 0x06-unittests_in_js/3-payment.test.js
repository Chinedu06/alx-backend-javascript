// 3-payment.test.js
import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with the correct arguments', () => {
    // Stub Utils.calculateNumber
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    // Validate the stub was called with correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the stub
    stub.restore();
  });
});

