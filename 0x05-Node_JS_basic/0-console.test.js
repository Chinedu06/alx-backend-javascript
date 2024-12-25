const displayMessage = require('./0-console');

describe('displayMessage', () => {
  it('should print the correct message to STDOUT', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const message = 'Test Message';

    displayMessage(message);

    expect(consoleSpy).toHaveBeenCalledWith(message);

    consoleSpy.mockRestore();
  });
});
