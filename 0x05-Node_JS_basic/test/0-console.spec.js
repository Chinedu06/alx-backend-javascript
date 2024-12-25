const { expect } = require('chai');  // Chai for assertions
const sinon = require('sinon');  // Sinon for spying
const displayMessage = require('../0-console');  // Import your function

describe('displayMessage', () => {
  it('should print the correct message to STDOUT', () => {
    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');
    const message = 'Test Message';  // The message to test

    // Call the function
    displayMessage(message);

    // Assertions
    expect(consoleSpy.calledOnce).to.be.true;  // Check if console.log was called once
    expect(consoleSpy.calledWithExactly(message)).to.be.true;  // Check if console.log was called with the correct message

    // Restore the original console.log
    consoleSpy.restore();
  });
});

