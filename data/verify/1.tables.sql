-- Verify sonow:1.tables on pg

BEGIN;

SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'detailsinfos'
);

SELECT EXISTS (
	SELECT FROM
		information_schema.tables
	WHERE
		table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'event'
);

SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'event_has_tag'
);

SELECT EXISTS (
	SELECT FROM
		information_schema.tables
	WHERE
		table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'position'
);

SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'tag'
);

SELECT EXISTS (
	SELECT FROM
		information_schema.tables
	WHERE
		table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'user'
);

SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'user_attend_event'
);

SELECT EXISTS (
	SELECT FROM
		information_schema.tables
	WHERE
		table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'user_pin_event'
);

SELECT EXISTS (
    SELECT FROM 
        information_schema.tables 
    WHERE 
        table_schema LIKE 'public' AND 
        table_type LIKE 'BASE TABLE' AND
        table_name = 'user_follow_user'
);

ROLLBACK;
