export interface MapListItem {
  id: number;
  nameEn: string;
  nameKr: string;
  descriptionEn: string;
  descriptionKr: string;
  thumbnailFilePath: string;
  thumbnailFilename: string;
  url: string;
  viewCount: number;
}

export interface NftInfo {
  id: number;
  editionName: string;
  editionNumber: string;
  artworkId: number;
  tokenId: number;
  tokenUri: string;
  txHash: string;
  ipfsUrl: string;
  originFilePath: string;
  originFileName: string;
  etherscanUrl: string;
}

export interface NftItem {
  id: number;
  title: string;
  description: string;
  year: string;
  price: number;
  totalEdition: number;
  soldEdition: number;
  salesStatusId: number;
  Dimension: string;
  fileExtension: string;
  fileSize: string;
  originFilePath: string;
  originFileName: string;
  thumbnailFilePath: string;
  thumbnailFilename: string;
  viewCount: number;
  nft: NftInfo;
}
