import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllProviderInMonthDTO from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllProviderInDayDTO from '../dtos/IFindAllInDayFromProviderDTO';

import Appointment from '../infra/typeorm/entities/Appointments';

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findAllInMonthFromProvider(
    data: IFindAllProviderInMonthDTO,
  ): Promise<Appointment[]>;
  findByDate(date: Date): Promise<Appointment | undefined>;
  findAllInDayFromProvider(
    data: IFindAllProviderInDayDTO,
  ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
