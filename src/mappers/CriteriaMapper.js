import { Criteria } from "../domain/eligibility/Criteria";

export class CriteriaMapper {
  static toDomain(criteria) {
    return new Criteria();
  }
}
