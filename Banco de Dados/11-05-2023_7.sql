SELECT ALUNOS.NOME, CURSOS.NOME
FROM ALUNOS, CURSOS, ALUNOS_CURSOS
WHERE ALUNOS.ID = ALUNOS_CURSOS.ID_ALUNO
AND CURSOS.ID = ALUNOS_CURSOS.ID_CURSO