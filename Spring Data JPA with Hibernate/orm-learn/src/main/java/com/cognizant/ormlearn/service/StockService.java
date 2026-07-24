package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Stock;
import com.cognizant.ormlearn.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    @Transactional
    public List<Stock> getStockInPeriod(String code, Date startDate, Date endDate) {
        return stockRepository.findByCodeAndDateBetween(code, startDate, endDate);
    }

    @Transactional
    public List<Stock> getStocksAbovePrice(String code, BigDecimal price) {
        return stockRepository.findByCodeAndCloseGreaterThan(code, price);
    }

    @Transactional
    public List<Stock> getTop3HighestVolume() {
        return stockRepository.findTop3ByOrderByVolumeDesc();
    }

    @Transactional
    public List<Stock> getLowest3ClosePrices(String code) {
        return stockRepository.findTop3ByCodeOrderByCloseAsc(code);
    }
}
