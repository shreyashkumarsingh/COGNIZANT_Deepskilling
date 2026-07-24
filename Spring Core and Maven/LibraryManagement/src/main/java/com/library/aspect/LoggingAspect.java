package com.library.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

/**
 * Exercise 3 — LoggingAspect for tracking method execution times
 * Exercise 8 — Before and After advice methods for cross-cutting concerns
 */
@Aspect
@Component
public class LoggingAspect {

    // Exercise 8 — Before advice
    @Before("execution(* com.library.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("[AOP] Before: "
                + joinPoint.getSignature().getName());
    }

    // Exercise 8 — After advice
    @After("execution(* com.library.service.*.*(..))")
    public void logAfter(JoinPoint joinPoint) {
        System.out.println("[AOP] After: "
                + joinPoint.getSignature().getName());
    }

    // Exercise 3 — Around advice to measure execution time
    @Around("execution(* com.library.service.*.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint)
            throws Throwable {

        long start = System.currentTimeMillis();

        Object result = joinPoint.proceed();

        long elapsedMs = System.currentTimeMillis() - start;

        System.out.println("[AOP] " + joinPoint.getSignature().getName()
                + " executed in " + elapsedMs + " ms");

        return result;
    }

}
