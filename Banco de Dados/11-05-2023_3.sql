CREATE TABLE ALUNO_CURSO(
	ID INT NOT NULL auto_increment PRIMARY KEY,
    ID_ALUNO INT NOT NULL,
    ID_CURSO INT NOT NULL
);

insert into alunos_cursos(id_curso, id_aluno) values (1,1)

SELECT * FROM ALUNOS_CURSOS