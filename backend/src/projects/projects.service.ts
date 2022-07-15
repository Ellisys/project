import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ) { }

  create(createProjectDto: CreateProjectDto) {

    return this.projectsRepository.save(createProjectDto);

  }

  findAll() {
    return this.projectsRepository.find()
  }

  findOne(id: number) {
    return this.projectsRepository.findOneBy({ id });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectsRepository.update({ id }, { ...updateProjectDto });
  }

  remove(id: number) {
    return this.projectsRepository.delete({ id });
  }
}
