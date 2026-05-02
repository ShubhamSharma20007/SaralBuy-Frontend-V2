import instance from '@/helper/instance';

class RequirementService {
  async getRecentRequiremnts() {
    return instance.get('requirement/recent-requirements').then(res => res.data?.data || res.data);
  }

  async createRequirement(params) {
    return instance.post('/requirement/create', params).then(res => res.data?.data || res.data);
  }
}
export default new RequirementService();
