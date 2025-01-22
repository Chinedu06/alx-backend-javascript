// 4-payment.test.js
import sinon from 'sinon';
import { expect } from 'chai';
import Utils from './utils.js';
import sendPaymentRequestToApi from './4-payment.js';

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and spy on console.log', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with correct arguments
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Verify console.log was called with the correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

