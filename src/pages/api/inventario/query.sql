select
    prod.codigo,
    prod.descripcion,
    prod.categoria,
    ifnull(ent.Entradas, 0) [Entradas],
    ifnull(sal.Salidas, 0) [Salidas],
    prod.Stock,
    ifnull(ent.TotalEgresos, 0) [TotalEgresos],
    ifnull(sal.TotalIngresos, 0) [TotalIngresos]
from
    (
        select
            DISTINCT *
        from
            (
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLEENTRADA de
                    inner join ENTRADA e on e.idEntrada = de.idEntrada
                    inner join PRODUCTO p on p.idProducto = de.idProducto
                UNION ALL
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLE_SALIDA ds
                    inner join SALIDA s on s.idSalida = ds.idSalida
                    inner join PRODUCTO p on p.idProducto = ds.idProducto
            ) temp
    ) prod
    left join (
        select
            p.idProducto,
            sum(de.Cantidad) [Entradas],
            sum(CAST(de.SubTotal as NUMERIC)) [TotalEgresos]
        from
            PRODUCTO p
            inner join DETALLEENTRADA de on de.idProducto = p.idProducto
            inner join ENTRADA e on e.idEntrada = de.idEntrada
        group by
            p.idProducto,
            p.codigo,
            p.descripcion,
            p.categoria,
    ) ent on ent.idProducto = prod.idProducto
    left join (
        select
            p.idProducto,
            sum(ds.Cantidad) [Salidas],
            sum(CAST(ds.SubTotal as NUMERIC)) [TotalIngresos]
        from
            PRODUCTO p
            inner join DETALLE_SALIDA ds on ds.idProducto = p.idProducto
            inner join SALIDA s on s.idSalida = ds.idSalida
        group by
            p.idProducto
    ) sal on sal.idProducto = prod.idProducto
     -- //////////////////////////////////////////////////////////////////////
    query.AppendLine(
        "select prod.codigo,prod.descripcion,prod.categoria,prod.Almacen,"
    );

query.AppendLine(
    "ifnull(ent.Entradas,0)[Entradas],ifnull(sal.Salidas,0)[Salidas],"
);

query.AppendLine("prod.stock,");

query.AppendLine(
    "printf(\"%.2f\", ifnull(ent.TotalEgresos,0))[TotalEgresos],printf(\" % .2f\", ifnull(sal.TotalIngresos,0))[TotalIngresos]"
);

query.AppendLine("from (");

query.AppendLine("select DISTINCT * from (");

query.AppendLine(
    "select p.idProducto,p.codigo,p.descripcion,p.categoria,,p.stock from DETALLEENTRADA de"
);

query.AppendLine(
    "inner join ENTRADA e on e.idEntrada = de.idEntrada"
);

query.AppendLine(
    "inner join PRODUCTO p on p.IdProducto = de.IdProducto where DATE(e.FechaRegistro) BETWEEN DATE(@pfechainicio1) AND DATE(@pfechafin1)"
);

query.AppendLine("UNION ALL");

query.AppendLine(
    "select p.IdProducto,p.codigo,p.descripcion,p.categoria,p.Almacen,p.Stock from DETALLE_SALIDA ds"
);

query.AppendLine(
    "inner join SALIDA s on s.idSalida = ds.idSalida"
);

query.AppendLine(
    "inner join PRODUCTO p on p.IdProducto = ds.IdProducto where DATE(s.FechaRegistro) BETWEEN DATE(@pfechainicio2) AND DATE(@pfechafin2)"
);

query.AppendLine(") temp");

query.AppendLine(") prod");

query.AppendLine("left join (");

query.AppendLine(
    "select p.IdProducto,sum(de.Cantidad)[Entradas],sum(CAST(de.SubTotal as NUMERIC))[TotalEgresos] from PRODUCTO p"
);

query.AppendLine(
    "inner join DETALLE_ENTRADA de on de.IdProducto = p.IdProducto"
);

query.AppendLine(
    "inner join ENTRADA e on e.IdEntrada = de.IdEntrada where DATE(e.FechaRegistro) BETWEEN DATE(@pfechainicio3) AND DATE(@pfechafin3)"
);

query.AppendLine(
    "group by p.IdProducto,p.codigo,p.Descripcion,p.Categoria,p.Almacen"
);

query.AppendLine(") ent on ent.IdProducto = prod.IdProducto");

query.AppendLine("left join (");

query.AppendLine(
    "select p.IdProducto,sum(ds.Cantidad)[Salidas],sum(CAST(ds.SubTotal as NUMERIC))[TotalIngresos] from PRODUCTO p"
);

query.AppendLine(
    "inner join DETALLE_SALIDA ds on ds.IdProducto = p.IdProducto"
);

query.AppendLine(
    "inner join SALIDA s on s.IdSalida = ds.IdSalida where DATE(s.FechaRegistro) BETWEEN DATE(@pfechainicio4) AND DATE(@pfechafin4)"
);

query.AppendLine("group by p.IdProducto");

query.AppendLine(") sal on sal.IdProducto = prod.IdProducto");


select
    prod.codigo,
    prod.descripcion,
    prod.categoria,
    ifnull(ent.Entradas, 0) Entradas,
    ifnull(sal.Salidas, 0) Salidas,
    prod.stock,
    ifnull(ent.TotalEgresos, 0) TotalEgresos,
    ifnull(sal.TotalIngresos, 0) TotalIngresos
from
    (
        select
            DISTINCT *
        from
            (
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLEENTRADA de
                    inner join ENTRADA e on e.idEntrada = de.idEntrada
                    inner join PRODUCTO p on p.idProducto = de.idProducto
                UNION ALL
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLESALIDA ds
                    inner join SALIDA s on s.idSalida = ds.idSalida
                    inner join PRODUCTO p on p.idProducto = ds.idProducto
            ) temp
    ) prod
    left join (
        select
            p.idProducto,
            sum(de.cantidad) Entradas,
            sum(CAST(de.subTotal as double)) TotalEgresos
        from
            PRODUCTO p
            inner join DETALLEENTRADA de on de.idProducto = p.idProducto
            inner join ENTRADA e on e.idEntrada = de.idEntrada
        group by
            p.idProducto,
            p.codigo,
            p.descripcion,
            p.categoria,
    ) ent on ent.idProducto = prod.idProducto
    left join (
        select
            p.idProducto,
            sum(ds.cantidad) Salidas,
            sum(CAST(ds.subTotal as double)) TotalIngresos
        from
            PRODUCTO p
            inner join DETALLESALIDA ds on ds.idProducto = p.idProducto
            inner join SALIDA s on s.idSalida = ds.idSalida
        group by
            p.idProducto
    ) sal on sal.idProducto = prod.idProducto
    (
        select
            DISTINCT *
        from
            (
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLEENTRADA de
                    inner join ENTRADA e on e.idEntrada = de.idEntrada
                    inner join PRODUCTO p on p.idProducto = de.idProducto
                UNION ALL
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLESALIDA ds
                    inner join SALIDA s on s.idSalida = ds.idSalida
                    inner join PRODUCTO p on p.idProducto = ds.idProducto
            ) temp
    ) prod
    left join (
        select
            p.idProducto,
            sum(de.cantidad) Entradas,
            sum(CAST(de.subTotal as double)) TotalEgresos
        from
            PRODUCTO p
            inner join DETALLEENTRADA de on de.idProducto = p.idProducto
            inner join ENTRADA e on e.idEntrada = de.idEntrada
        group by
            p.idProducto,
            p.codigo,
            p.descripcion,
            p.categoria,
    ) ent on ent.idProducto = prod.idProducto
    left join (
        select
            p.idProducto,
            sum(ds.cantidad) Salidas,
            sum(CAST(ds.subTotal as double)) TotalIngresos
        from
            PRODUCTO p
            inner join DETALLESALIDA ds on ds.idProducto = p.idProducto
            inner join SALIDA s on s.idSalida = ds.idSalida
        group by
            p.idProducto
    ) sal on sal.idProducto = prod.idProducto



    -- 
SELECT * from (select p.idProducto, sum(de.cantidad) Entradas, sum(CAST(de.subTotal as decimal)) TotalEgresos from PRODUCTO p inner join DETALLEENTRADA de on de.idProducto = p.idProducto inner join ENTRADA e on e.idEntrada = de.idEntrada group by p.idProducto, p.codigo, p.descripcion, p.categoria )ent;
-- 
SELECT * FROM ( select p.idProducto, sum(ds.cantidad) Salidas, sum(CAST(ds.subTotal as decimal)) TotalIngresos from PRODUCTO p inner join DETALLESALIDA ds on ds.idProducto = p.idProducto inner join SALIDA s on s.idSalida = ds.idSalida group by p.idProducto) sal;
-- 
SELECT * FROM ( select DISTINCT * from ( select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLEENTRADA de inner join ENTRADA e on e.idEntrada = de.idEntrada inner join PRODUCTO p on p.idProducto = de.idProducto UNION ALL select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLESALIDA ds inner join SALIDA s on s.idSalida = ds.idSalida inner join PRODUCTO p on p.idProducto = ds.idProducto ) temp) prod;
-- 

select
    prod.codigo,
    prod.descripcion,
    prod.categoria,
    ifnull(ent.Entradas, 0) Entradas,
    ifnull(sal.Salidas, 0) Salidas,
    prod.stock,
    ifnull(ent.TotalEgresos, 0) TotalEgresos,
    ifnull(sal.TotalIngresos, 0) TotalIngresos
from(
    SELECT * FROM ( select DISTINCT * from ( select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLEENTRADA de inner join ENTRADA e on e.idEntrada = de.idEntrada inner join PRODUCTO p on p.idProducto = de.idProducto UNION ALL select p.idProducto, p.codigo, p.descripcion, p.categoria, p.stock from DETALLESALIDA ds inner join SALIDA s on s.idSalida = ds.idSalida inner join PRODUCTO p on p.idProducto = ds.idProducto ) temp)) prod
    left join (
        SELECT * from (select p.idProducto, sum(de.cantidad) Entradas, sum(CAST(de.subTotal as decimal)) TotalEgresos from PRODUCTO p inner join DETALLEENTRADA de on de.idProducto = p.idProducto inner join ENTRADA e on e.idEntrada = de.idEntrada group by p.idProducto, p.codigo, p.descripcion, p.categoria ))ent on ent.idProducto = prod.idProducto
        left join (
            SELECT * FROM ( select p.idProducto, sum(ds.cantidad) Salidas, sum(CAST(ds.subTotal as decimal)) TotalIngresos from PRODUCTO p inner join DETALLESALIDA ds on ds.idProducto = p.idProducto inner join SALIDA s on s.idSalida = ds.idSalida group by p.idProducto)) sal on sal.idProducto = prod.idProducto

-- 
select
    prod.codigo,
    prod.descripcion,
    prod.categoria,
    ifnull(ent.Entradas, 0) Entradas,
    ifnull(sal.Salidas, 0) Salidas,
    prod.Stock,
    ifnull(ent.TotalEgresos, 0) TotalEgresos,
    ifnull(sal.TotalIngresos, 0) TotalIngresos
from
    (
        select
            DISTINCT *
        from
            (
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLEENTRADA de
                    inner join ENTRADA e on e.idEntrada = de.idEntrada
                    inner join PRODUCTO p on p.idProducto = de.idProducto
                UNION ALL
                select
                    p.idProducto,
                    p.codigo,
                    p.descripcion,
                    p.categoria,
                    p.stock
                from
                    DETALLESALIDA ds
                    inner join SALIDA s on s.idSalida = ds.idSalida
                    inner join PRODUCTO p on p.idProducto = ds.idProducto
            ) temp
    ) prod
    left join (
            select
            p.idProducto,
            sum(de.Cantidad) Entradas,
            sum(CAST(de.SubTotal as decimal)) TotalEgresos
        from
            PRODUCTO p
            inner join DETALLEENTRADA de on de.idProducto = p.idProducto
            inner join ENTRADA e on e.idEntrada = de.idEntrada
        group by
            p.idProducto,
            p.codigo,
            p.descripcion,
            p.categoria
    )ent on ent.idProducto = prod.idProducto
     left join (
            select
            p.idProducto,
            sum(ds.Cantidad) Salidas,
            sum(CAST(ds.SubTotal as decimal)) TotalIngresos
        from
            PRODUCTO p
            inner join DETALLESALIDA ds on ds.idProducto = p.idProducto
            inner join SALIDA s on s.idSalida = ds.idSalida
        group by
            p.idProducto
    )sal on sal.idProducto = prod.idProducto
   