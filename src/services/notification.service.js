import instance from '@/helper/instance';

class NotificationService {
  async getNotifications(page = 1, limit = 10, sortOrder = 'desc') {
    return instance
      .get('/notification', {
        params: { page, limit, sort: sortOrder },
      })
      .then(res => res.data?.data || res.data);
  }

  async deleteNotification(notificationId) {
    return instance.delete(`/notification/${notificationId}`).then(res => res.data);
  }

  async markAsSeen(notificationId) {
    return instance.patch(`/notification/${notificationId}/seen`).then(res => res.data);
  }

  async markAllAsSeen() {
    return instance.patch('/notification/seen/all').then(res => res.data);
  }
}

export default new NotificationService();
