class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message); //не найдено
  }

  static internal(message) {
    return new ApiError(500, message); //внутренняя ошибка сервера
  }

  static forbidden(message) {
    return new ApiError(403, message); //доступ к запрошенному ресурсу запрещен
  }

  static unauthorized(message) {
    return new ApiError(401, message); //Не авторизован
  }
}

module.exports = ApiError;