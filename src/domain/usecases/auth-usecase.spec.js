class AuthUseCase {
  async auth(email) {
    if (!email) {
      throw new Error()
    }
  }
}

describe('Auth Usecase', () => {
  it('Should throw if no email ir provided', async () => {
    const sut = new AuthUseCase()
    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })
})